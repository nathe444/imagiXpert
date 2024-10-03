import { model, models, Schema } from "mongoose";

const TransactionSchema = new Schema({
  createdAt : {type:Date , default:Date.now},
  stripeId : {type:String, required:true , unique:true},
  amount : {type:Number, required:true},
  plan: {type:String},
  credits:{type:Number},
  buyer:{type:Schema.Types.ObjectId, ref: 'User'},
});

const Transction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transction