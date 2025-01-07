import { Schema, Document } from "mongoose";

const TicketSchema = new Schema({
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const EventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    eventcategory: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: Number, required: false },
    location: AddressSchema,
    organizer: {},
    tickets: [TicketSchema],
    isVirtual: { type: Boolean, required: false },
  },
  { timestamps: true }
);
