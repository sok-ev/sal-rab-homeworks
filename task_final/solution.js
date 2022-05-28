// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let itemData = {
         data: {
             client: '',
             order: {address:'', sum: ''},
             goods: []}
    }
    itemData.data.client = name + ' ' + phone;
    itemData.data.order.address = "ул. " + address.street + ', ' +  "дом " + address.house + ', ' +  address.entrance + " подъезд, " + address.floor + " этаж, " + "кв " + address.flat;
    itemData.data.order.sum = sum;
    //itemData.data.goods.title = '';
   // itemData.data.goods.count = 0;
   // let countOfGoods = goods.length;

    //for (let i = 0; i <= countOfGoods; i += 1) {
    //    data.goods.push(goods[i].title);
    //}

    //let jsonData = JSON.stringify(data);

    //return jsonData;
    goods.forEach((product) => {
        let goodsCustom = {title: '', count:''};
        goodsCustom.title = product.title;
        goodsCustom.count = product.count;
        itemData.data.goods.push(goodsCustom);
      })

    let jsonData = JSON.stringify(itemData);
    return jsonData;
}

