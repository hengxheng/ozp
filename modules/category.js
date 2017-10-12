import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const categorySchema = new Schema(
	{
		name: String,
		postDate : { type: Date, default: Date.now }
	}
);

export default mongoose.model('Category', categorySchema);