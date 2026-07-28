'use client';

import React, { useState, useMemo } from 'react';
import { REVIEWS } from '@/data/packages';
import { Review } from '@/types/travel';
import { Star, CheckCircle, Quote, Sparkles, MessageSquarePlus, ExternalLink, X, Send, ThumbsUp, Filter } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  // Form state for writing a new review
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [tripName, setTripName] = useState('Spiti Valley Ultimate Circuit');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleHelpful = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author,
      location: location || 'Delhi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
      rating,
      date: 'Just now',
      tripName,
      comment,
      verified: true,
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setAuthor('');
      setLocation('');
      setComment('');
      setRating(5);
    }, 1500);
  };

  const filteredReviews = useMemo(() => {
    if (selectedFilter === 'All') return reviewsList;
    if (selectedFilter === '5 Star') return reviewsList.filter((r) => r.rating === 5);
    return reviewsList.filter((r) => r.tripName.toLowerCase().includes(selectedFilter.toLowerCase()));
  }, [selectedFilter, reviewsList]);

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Rating Overview Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          
          <div>
            <div className="flex items-center gap-2 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Google Verified Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Customer Ratings & Feedback
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              We take pride in our 4.9★ rating across 2,580+ verified traveler reviews. Share your experience with Trip With Safarwala or filter real feedback below.
            </p>
          </div>

          {/* Rating Breakdown & Summary Card */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 border border-slate-200 p-5 rounded-2xl shrink-0">
            
            {/* Big Score */}
            <div className="text-center sm:text-left pr-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-slate-200 pb-4 sm:pb-0">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#2956B1] mb-1">
                <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                <span className="font-black text-4xl text-slate-900">4.9</span>
                <span className="text-slate-400 text-xs font-bold">/ 5</span>
              </div>
              <div className="text-xs text-slate-600 font-bold">2,580+ Google Reviews</div>
              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">✔ 98% Recommend Safarwala</div>
            </div>

            {/* Rating Bar Distribution */}
            <div className="w-full sm:w-36 space-y-1.5 text-[11px] text-slate-600 font-semibold border-b sm:border-b-0 sm:border-r border-slate-200 pb-4 sm:pb-0 pr-0 sm:pr-6">
              <div className="flex items-center gap-2">
                <span>5★</span>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-[94%]" />
                </div>
                <span>94%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>4★</span>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-[5%]" />
                </div>
                <span>5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>3★</span>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-[1%]" />
                </div>
                <span>1%</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md shadow-[#2956B1]/20 flex items-center justify-center gap-2 transition active:scale-95 whitespace-nowrap"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Review</span>
              </button>

              <a
                href="https://search.google.com/local/writereview"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm whitespace-nowrap"
              >
                <span>Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2956B1]" />
              </a>
            </div>

          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs">
          <span className="text-slate-500 font-bold flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#2956B1]" />
            Filter Reviews:
          </span>
          {['All', '5 Star', 'Spiti', 'Meghalaya', 'Kashmir', 'Ladakh'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl font-bold transition whitespace-nowrap border ${
                selectedFilter === tab
                  ? 'bg-[#2956B1] text-white border-[#2956B1] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab === '5 Star' ? '⭐ 5 Star Ratings' : tab}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between relative group hover:border-[#2956B1]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Google Review
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer & Helpful Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1">
                      <span>{rev.author}</span>
                      <span className="text-[10px] text-slate-500 font-normal">({rev.location})</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Traveled on <span className="text-[#2956B1] font-semibold">{rev.tripName}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleHelpful(rev.id)}
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#2956B1] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg transition"
                  title="Mark as helpful"
                >
                  <ThumbsUp className="w-3 h-3 text-[#2956B1]" />
                  <span>{12 + (helpfulCounts[rev.id] || 0)}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* WRITE A REVIEW MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-lg p-6 shadow-2xl text-slate-900">
            
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <ThumbsUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Thank You For Your Review!</h3>
                <p className="text-xs text-slate-600">
                  Your feedback has been published successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[#2956B1] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Share Your Experience</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Rate & Review Trip With Safarwala</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Your feedback helps fellow travelers plan their dream trips!
                  </p>
                </div>

                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Your Rating</label>
                  <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-125 transition transform"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-200 text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 font-extrabold text-sm text-[#2956B1]">{rating} / 5 Stars</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="e.g. Priya Verma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your City / Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Delhi NCR / Chandigarh"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Trip Name</label>
                  <select
                    value={tripName}
                    onChange={(e) => setTripName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1] cursor-pointer"
                  >
                    <option value="Spiti Valley Ultimate Circuit">Spiti Valley Ultimate Circuit</option>
                    <option value="Meghalaya Abode of Clouds">Meghalaya Abode of Clouds</option>
                    <option value="Kashmir Heavenly Paradise">Kashmir Heavenly Paradise</option>
                    <option value="Kedarnath Dham Trek">Kedarnath Dham Trek</option>
                    <option value="Leh Ladakh Biking Expedition">Leh Ladakh Biking Expedition</option>
                    <option value="Bali Tropical Paradise">Bali Tropical Paradise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Review Comment</label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the trip captain, homestays, Volvo journey, and safety..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#2956B1]/20 transition active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit My Review</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
