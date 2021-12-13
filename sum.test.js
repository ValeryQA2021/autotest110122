const sum = require('./sum');
var axios = require('axios');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('compaies , status 200', async () => {
    expect.assertions(1);

    var config = {
        method: 'get',
        url: 'https://labs-api.staging.it-kamasutra.com/api/friends/companies',
        headers: {
            'FRIEND-TOKEN': '123'
        }
    };

    try {
        const res = await axios(config);
        expect(res.status).toBe(200)
    } catch (error) {

    }
});


test('courses , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/courses/new',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('geo-countries , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/geo/countries',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('geo-cities , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/geo/cities',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('groups , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/groups',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('groups , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/groups',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        const res = await axios(config);

        expect(res.data).toEqual({"pagesCount":4,"page":1,"pageSize":10,"totalCount":31,"items":[{"id":1,"title":"Новенькие","startDate":"2020-08-10T00:00:00"},{"id":2,"title":"Вёрстка номер 1.1","startDate":"2021-08-20T00:00:00"},{"id":3,"title":"Новенькие 2","startDate":"2020-09-09T00:00:00"},{"id":1003,"title":"Тест группы","startDate":"2021-10-15T00:00:00"},{"id":1004,"title":"Фронт Группа 29.1","startDate":"2021-08-20T00:00:00"},{"id":1005,"title":"Фронт Группа 29.2","startDate":"2021-08-20T00:00:00"},{"id":1006,"title":"Вёрстка номер 1.1","startDate":"2021-08-20T00:00:00"},{"id":1007,"title":"Фронт Группа 30.1","startDate":"2021-09-16T00:00:00"},{"id":1008,"title":"delete","startDate":"2020-10-07T00:00:00"},{"id":1009,"title":"Последняя созданная группа","startDate":"2021-09-17T00:00:00"}]})

    }
);


test('students-QA , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/students/qa',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('students-telegram , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/students/telegram/{studentTelegramId}',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);


test('students/{studentId} , status 200', async () => {
        expect.assertions(1);

        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/friends/students/telegram/{studentTelegramId}',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.status).toBe(200)
        } catch (error) {

        }
    }
);

/*

test('groups , polychenie dannih', async () => {
        expect.assertions(1);
        var config = {
            method: 'get',
            url: 'https://labs-api.staging.it-kamasutra.com/api/groups/1030',
            headers: {
                'FRIEND-TOKEN': '123'
            }
        };

        try {
            const res = await axios(config);
            expect(res.data).toEqual({
                "startDate": "2021-12-01T00:00:00.0000000Z",
                "title": "Самая БАГАТАЯ группа",
                "courseSettingId": 16,
                "id": 1030,
                "addedAt": "2021-11-16T10:57:00.6732320Z"
            })
        } catch (error) {

        }
    }
);*/
