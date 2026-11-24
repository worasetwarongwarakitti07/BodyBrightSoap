/**
 * BodyBright Google Sheets Backend API (Google Apps Script)
 * เชื่อมต่อหน้าเว็บสั่งซื้อ (order.html) และหน้าคลังสินค้า/หลังบ้าน (admin.html & warehouse/pick-pack.html)
 * เข้ากับ Google Sheets โดยอัตโนมัติ
 */

const SHEET_ORDERS = 'Orders';
const SHEET_SKUS = 'SKUs';

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'getOrders';
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (action === 'getOrders') {
    const sheet = ss.getSheetByName(SHEET_ORDERS);
    if (!sheet) return jsonResponse({ status: 'error', message: 'ไม่พบแท็บ Orders' });
    const rows = sheet.getDataRange().getValues();
    if (rows.length <= 1) return jsonResponse({ status: 'success', orders: [] });

    const headers = rows[0];
    const orders = rows.slice(1).map(r => {
      let obj = {};
      headers.forEach((h, i) => obj[h] = r[i]);
      try { obj.items = JSON.parse(obj.items_json || '[]'); } catch (err) { obj.items = []; }
      return obj;
    }).reverse();

    return jsonResponse({ status: 'success', orders: orders });
  }

  if (action === 'getSKUs') {
    const sheet = ss.getSheetByName(SHEET_SKUS);
    if (!sheet) return jsonResponse({ status: 'error', message: 'ไม่พบแท็บ SKUs' });
    const rows = sheet.getDataRange().getValues();
    const headers = rows[0];
    const skus = rows.slice(1).map(r => {
      let obj = {};
      headers.forEach((h, i) => obj[h] = r[i]);
      return obj;
    });
    return jsonResponse({ status: 'success', skus: skus });
  }

  return jsonResponse({ status: 'error', message: 'Unknown action' });
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const action = payload.action || 'createOrder';
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === 'createOrder') {
      const sheet = ss.getSheetByName(SHEET_ORDERS);
      const o = payload.order;
      const skuSummary = o.items.map(i => `${i.sku} x${i.qty}`).join(', ');
      const pickListSummary = buildPickSummary(o.items);

      sheet.appendRow([
        o.orderId,
        o.date,
        o.customer.name,
        "'" + o.customer.phone,
        o.customer.address,
        o.customer.payment,
        skuSummary,
        pickListSummary,
        o.subtotal,
        o.shipping,
        o.total,
        o.status || 'รอดำเนินการ',
        JSON.stringify(o.items)
      ]);

      return jsonResponse({ status: 'success', orderId: o.orderId });
    }

    if (action === 'updateStatus') {
      const sheet = ss.getSheetByName(SHEET_ORDERS);
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(payload.orderId)) {
          sheet.getRange(i + 1, 12).setValue(payload.status); // Column L = Status
          return jsonResponse({ status: 'success', updated: payload.orderId });
        }
      }
      return jsonResponse({ status: 'error', message: 'Order ID not found' });
    }

    return jsonResponse({ status: 'error', message: 'Invalid POST action' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function buildPickSummary(items) {
  const counts = {};
  items.forEach(item => {
    const comps = item.pick_components || [{ label: item.name, qty: 1 }];
    comps.forEach(c => {
      counts[c.label] = (counts[c.label] || 0) + (c.qty * item.qty);
    });
  });
  return Object.keys(counts).map(k => `${k} (${counts[k]} ก้อน)`).join(' + ');
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
