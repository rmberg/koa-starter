import WidgetsController from '../controllers/widgets.controller';
import mockingoose from 'mockingoose';

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    //Widget.mockClear();
});


it("We expect WidgetsController#list to call findAll on Widget", async () => {

    const ctx = { ok: jest.fn() };

    const response = [];
    mockingoose.Widget.toReturn(response, 'find');
    await WidgetsController.list(ctx);
    expect(ctx.ok).toHaveBeenCalledTimes(1);
    expect(ctx.ok).toHaveBeenCalledWith(response);

});

it("We expect WidgetsController#create to create a Widget", async () => {

    const ctx = { created: jest.fn(), request: { body: { name: "foo", price: 2.50 }} };

    const response = {"_id": '5aac11fe997fa8fca221e67d', "name": 'foo', "price": 2.50};
    mockingoose.Widget.toReturn(response, 'save');
    await WidgetsController.create(ctx);
    expect(ctx.created).toHaveBeenCalledTimes(1);
    expect(ctx.created.mock.calls[0][0]).toHaveProperty('name', response.name);

});