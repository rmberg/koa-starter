import mongoose from 'mongoose';

const WidgetSchema = mongoose.Schema({
    name: { type: String, required: true, index: true },
    price: {type: Number, required: true }
}, { collection: 'Widget'} );

let WidgetModel = mongoose.model('Widget', WidgetSchema);

WidgetModel.findAll = () => {
    return WidgetModel.find({});
};

WidgetModel.get = (id) => {
    return WidgetModel.findOne({_id: id});
};

WidgetModel.create = (params) => {
    const widget = WidgetModel(params);
    return widget.save();
};

WidgetModel.remove = (id) => {
    return WidgetModel.remove({id: id});
};

export default WidgetModel;