import Widget from '../models/widget.model';

export default class WidgetController {

    static async list (ctx) {
        let widgets = await Widget.findAll();
        ctx.ok(widgets);
    }

    static async create (ctx) {
        const widget = await Widget.create(ctx.request.body);
        ctx.created(widget);
    }

    static async show (ctx) {
        const widget = await Widget.get(ctx.params.id);
        ctx.ok(widget);
    }

}