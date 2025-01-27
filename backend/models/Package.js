const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  cardImage: { type: String, required: true },
  galleryImages: [{ type: String}],
  description: { type: String, required: true },
  highlights: { type: String },
  navigate: { type: String },
  itinerary: [
    {
      day: { type: Number },
      activities: { type: String }
    }
  ],
  availability: [
    {
      startDate: { type: String, required: true },
      endDate: { type: Date, required: true },
      slots: { type: Number, required: true }
    }
  ]
});

const Package = mongoose.model('Package', PackageSchema);
module.exports = Package;
