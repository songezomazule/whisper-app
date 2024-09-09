import { Schema, model, models } from 'mongoose';

const SecretSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    secret: {
        type: String,
        required: [true, 'Secret is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

const Secret = models.Secret || model('Secret', SecretSchema);

export default Secret