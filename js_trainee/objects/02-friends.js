/*
 * Работа с коллекцией (массивом объектов)
 */

const friends = [
    { name: 'Arthur', online: false },
    { name: 'Lebowski', online: false },
    { name: 'Isaac', online: true },
    { name: 'Aragorn', online: false }
];

console.table(friends);

for (const friend of friends) {
    //* Массив сложных типов, то есть объектов, в цикле итерации for...of я получаю ССЫЛКУ на объект
    console.log(friend);

    friend.newProp = 'This is added property'; // Добавление нового свойства
}

console.table(friends);

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name === friendName) {
            return 'Found you!';
        }
    }
};
//! includes method работает только с коллекцией ПРИМИТИВОВ - числа, строки, були. В массиве он бесполезен

console.log(findFriendByName(friends, 'Arthur'));
console.log(findFriendByName(friends, 'Aragorn'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
    const arrNames = [];

    for (const friend of allFriends) {
        console.log(friend.name);

        arrNames.push(friend.name);
    }

    return arrNames;
};

console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFriends.push(friends);
        }
    }

    return onlineFriends;
};

console.log(getOnlineFriends(friends));

/*
 * Получаем имена только друзей которые оффлайн
 */

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (!friend.online) {
            offlineFriends.push(friends);
        }
    }

    return offlineFriends;
};

console.log(getOfflineFriends(friends));

/*
 * Получаем статус друзей в одной функции в два массива
 */

const getFriendsByOnlineStatus = function (allFriends) {
    const onlineStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
            onlineStatus.online.push(friend.online);
            continue;
        }
        // Вместо else {} использую continue
        onlineStatus.offline.push(friend.online);

        //! НЕ самый лучший способ использования тернарного оператора, однако он работает в данном случае
        // const key = friend.online ? 'online' : 'offline';
        // onlineStatus[key].push(friend);
    }

    return onlineStatus;
};

console.log(getFriendsByOnlineStatus(friends));
