let axios = require('axios');



test('user', async () => {
        /*expect.assertions(1)*/
        ;

        var config = {
            method: 'post',
            url: 'https://labs-api.testing.it-kamasutra.com/api/testing/data/generate',
            headers: {
                'FRIEND-TOKEN': '123',
                'COURSE-ID': 1
            },
            data: data
        };

        const res = await axios(config);
        expect(res.data).toEqual({"ok": true})

        var config1 = {
            method: 'get',
            url: 'https://labs-api.testing.it-kamasutra.com/api/users',
            headers: {
                'FRIEND-TOKEN': '123',
                'COURSE-ID': 1
            },
            data: data
        };
        let obj1 = {ok: true}
        let obj = {
            items: [{
                "addedAt": "2022-01-10T08:59:39.6204645Z",
                "firstName": "ВАЛЕРА",
                "id": 1,
                "lastName": "ИЛЬЛЬЛЬЛЬЕНКОВ",
                "login": null,
                "password": null,
                "roleId": 1,
                "telegramId": 25,
                "telegramUserName": "@valera",
            }],
            page: 1,
            pageSize: 10,
            pagesCount: 1,
            totalCount: 1,
        }

        const res1 = await axios(config1);
        expect(res1.data.items[0].firstName).toEqual("ВАЛЕРА")

    }
);



