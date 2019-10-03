import mongoose from 'mongoose';

const MeetupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  hour: { type: Date, required: true },
  image: { type: String, required: true },
  user_id: { type: Number, required: true },
});

export default mongoose.model('Meetup', MeetupSchema);
