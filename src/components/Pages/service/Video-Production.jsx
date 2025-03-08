import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import thumbnail from '../../../assets/img/Thumbnail.PNG'; // Replace with actual thumbnail image
import vid from '../../../assets/Video/marketing.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const videos = [
  { title: 'Video 1', url: vid },
  { title: 'Video 2', url: vid },
  { title: 'Video 3', url: vid },
  { title: 'Video 4', url: vid },
  { title: 'Video 5', url: vid },
  { title: 'Video 6', url: vid },
  { title: 'Video 7', url: vid },
  { title: 'Video 8', url: vid },
  { title: 'Video 9', url: vid },
];

const VideoProduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <div className='w-full'>
      <h2 className="text-4xl font-bold text-center mb-8">Video Production by Our Agency</h2>

      {/* Video Grid */}
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {videos.slice(0, 6).map((video, index) => (
          <div
            key={index}
            className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openModal(video)}
          >
            <div className="relative">
              <img
                src={thumbnail}
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="relative flex items-center justify-center">
                  {/* Outer glowing circle */}
                  <div className="absolute w-16 h-16 rounded-full bg-white opacity-30 animate-ping"></div>
                  {/* Inner static circle */}
                  <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {/* Play icon */}
                    <FontAwesomeIcon icon={faPlay} className="text-[#FD5F20]" />
                  </div>
                </button>
              </div>
            </div>

            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-black">{video.title}</h3>
              <p className="text-sm text-gray-400">2.3K views • 2 days ago</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold text-center mb-4">More Videos</h3>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {videos.slice(6).map((video, index) => (
            <SwiperSlide key={index}>
              <div
                className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(video)}
              >
                <div className="relative">
                  <img
                    src={thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white text-4xl">
                      <i className="fas fa-play-circle"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="text-sm text-gray-400">1.2K views • 1 week ago</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal-content bg-gray-900 rounded-lg p-0 w-full max-w-lg lg:max-w-2xl mt-8 mx-auto relative z-50 max-h-[80vh] overflow-hidden"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40"
        ariaHideApp={false}
      >
        {currentVideo && (
          <div className="relative w-full h-full flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              X
            </button>
            <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={currentVideo.url}
                title={currentVideo.title}
                controls
                autoPlay
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{currentVideo.title}</h3>
          </div>
        )}
      </ReactModal>
    </div>
    </div>
  );
};

export default VideoProduction;