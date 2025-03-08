import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import DigitalMarketingInfo from './DigitalMarketingInfo';
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import gr1 from '../../../assets/img/Mask group (1).png';
import gr2 from '../../../assets/img/Mask group (2).png';
import gr3 from '../../../assets/img/Mask group (3).png';
import gr4 from '../../../assets/img/Mask group (4).png';
import gr5 from '../../../assets/img/Mask group (5).png';
import BlogList from './BlogList';
import BlogPostEditor from '../../Blog/BlogPostEditor';
import { api } from '../../../api';
const items = [
    {
        imgSrc: gr1,
        title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
        description: 'Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip com...',
        subt: "Amy Porterfield",
        subtdisc: "Amy Porterfield"
    },
    {
        imgSrc: gr2,
        title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
        description: 'Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip com....',
        subt: "Amy Porterfield",
        subtdisc: "Amy Porterfield"
    },
    {
        imgSrc: gr3,
        title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
        description: 'Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip com...',
        subt: "Amy Porterfield",
        subtdisc: "Amy Porterfield"
    },
    {
        imgSrc: gr4,
        title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
        description: 'Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip com...',
        subt: "Amy Porterfield",
        subtdisc: "Amy Porterfield"
    },
    {
        imgSrc: gr5,
        title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
        description: 'Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip com...',
        subt: "Amy Porterfield",
        subtdisc: "Amy Porterfield"
    }
];
const  LatestBlogs=()=> {
    const [showEditor, setShowEditor] = useState(false);
    const toggleEditor = () => {
        setShowEditor((prev) => !prev);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await api.get('/blogs/GetAllBlogs');
            setPosts(response.data.blogs);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false); // Always set loading to false in the end
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='flex flex-col md:flex-row mt-24 md:ml-32 md:mr-32'>
          
            <div className='flex flex-col w-full md:w-full md:ml-12 md:mr-12'>
             
                <div className="p-4">
                    <button
                        onClick={openModal}
                        className="bg-[#FD5F20] text-white px-4 py-2 rounded hover:bg-[#E3551A] transition"
                    >
                        Create New Blog Post
                    </button>
                    <BlogPostEditor isOpen={isModalOpen} onClose={closeModal} onPostSuccess={fetchPosts} />
                </div>

                {loading ? (
                    <div className="text-center text-xl font-bold mt-8">Loading posts...</div>
                ) : (
                    <BlogList posts={posts} loading={loading} />
                )}

                <div className='bg-[#FD5F20] p-12 text-center text-3xl font-bold text-gray-200 rounded-lg'>
                    <h1>What is Digital Marketing?</h1>
                </div>

                <main className="max-w-full py-4 mx-auto">
                 
                    <DigitalMarketingInfo />
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-center mb-4 font-extrabold text-2xl'>Don't forget to share this post!</h1>
                        <span className='flex space-x-4'>
                            <FontAwesomeIcon icon={faFacebook} className="text-xl text-blue-600 cursor-pointer hover:text-blue-400" />
                            <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-600 cursor-pointer hover:text-pink-400" />
                            <FontAwesomeIcon icon={faTiktok} className="text-xl cursor-pointer hover:text-black" />
                            <FontAwesomeIcon icon={faYoutube} className="text-xl text-red-600 cursor-pointer hover:text-red-400" />
                        </span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 my-2">
                        <hr className="flex-grow border-t border-gray-500" />
                        <span className="text-center font-bold text-lg">Recommended For You</span>
                        <hr className="flex-grow border-t border-gray-500" />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 m-2 gap-2 ">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden ">
                                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    <h4 className='font-semi-bold'>{item.subt}</h4>
                                    <p className='text-sm text-gray-600'>{item.subtdisc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default LatestBlogs