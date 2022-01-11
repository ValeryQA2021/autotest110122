import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('roles-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {
        console.log('test for commit github')
        it('should be get roles', async () => {
            let res = await api.get('roles?pageSize=1&page=1');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(6);
            expect(res.data.items[0].name).toBe('manager');

            res = await api.get('roles?pageSize=1&page=2');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(5);
            expect(res.data.items[0].name).toBe('freelance');

            res = await api.get('roles?pageSize=1&page=3');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(4);
            expect(res.data.items[0].name).toBe('mentor');

            res = await api.get('roles?pageSize=1&page=4');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(3);
            expect(res.data.items[0].name).toBe('it');

            res = await api.get('roles?pageSize=1&page=5');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);
            expect(res.data.items[0].name).toBe('adminDimy4');

            res = await api.get('roles?pageSize=1&page=6');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].name).toBe('superadmin');
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
