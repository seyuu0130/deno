import { superoak } from "./deps.ts";
import { createApp } from "./create_greet_app.ts";

const app = createApp();

Deno.test(`GET greet 200 return`, async() => {
    const request = await superoak(app);
    await request.get('/greet').expect(200).expect("Hello anonymus!");
 });

Deno.test(`GET greet 200 hoge return`, async() => {
    const request = await superoak(app);
    await request.get('/greet?name=hoge').expect(200).expect("Hello hoge!");
});

Deno.test(`GET greet 404 hoge return`, async() => {
    const request = await superoak(app);
    await request.get('/').expect(404);
});