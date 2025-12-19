import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Profiles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const profiles = [
        {
            name: 'SkillRack',
            description: 'Coding Practice & Certifications',
            url: 'https://www.skillrack.com/faces/resume.xhtml?id=442563&key=4a3afc5dac8cb23ffab166f7b9da4c72678010fb',
            icon: 'https://yt3.googleusercontent.com/rkv4rZTw04X6-ppVC9phy9Fv_Y_n3zaVIgX6-dk43L5vsWClowBjTVXa64D5QiN8tIcKRqD3Tg=s900-c-k-c0x00ffffff-no-rj',
            color: 'from-blue-500 to-purple-500',
            bgHover: 'hover:border-blue-500/50'
        },
        {
            name: 'LeetCode',
            description: 'Problem Solving & DSA',
            url: 'https://leetcode.com/u/vigneshinr/',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png',
            color: 'from-yellow-500 to-orange-500',
            bgHover: 'hover:border-yellow-500/50'
        },
        {
            name: 'GitHub',
            description: 'Open Source & Projects',
            url: 'https://github.com/MVigneshayyanar',
            icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
            color: 'from-gray-400 to-gray-600',
            bgHover: 'hover:border-gray-400/50'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section id="profiles" className="p-3 md:p-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-4 md:px-6 md:py-6 border border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <motion.div
                        className="flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div>
                            <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">Programming Profiles</h2>
                            <p className="text-xs text-tertiary">My coding journey across platforms</p>
                        </div>
                    </motion.div>

                    {/* Profiles Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {profiles.map((profile, index) => (
                            <motion.a
                                key={index}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group backdrop-blur-sm bg-white/5 rounded-xl p-5 border border-white/10 ${profile.bgHover} transition-all duration-300 cursor-pointer block`}
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Icon with gradient background */}
                                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${profile.color} p-0.5 flex-shrink-0`}>
                                        <div className="w-full h-full bg-card-bg rounded-xl flex items-center justify-center">
                                            <img
                                                src={profile.icon}
                                                alt={`${profile.name} icon`}
                                                className="w-8 h-8 object-contain filter brightness-110"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-text-light font-bold text-lg group-hover:text-secondary transition-colors flex items-center gap-2">
                                            {profile.name}
                                            <motion.i
                                                className="fas fa-external-link-alt text-xs text-text-muted group-hover:text-secondary"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 3 }}
                                            ></motion.i>
                                        </h3>
                                        <p className="text-text-muted text-sm">{profile.description}</p>
                                    </div>
                                </div>

                                {/* Hover arrow indicator */}
                                <motion.div
                                    className="mt-3 text-xs text-text-muted group-hover:text-secondary flex items-center gap-1 transition-colors"
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <span>View Profile</span>
                                    <motion.i
                                        className="fas fa-arrow-right"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    ></motion.i>
                                </motion.div>
                            </motion.a>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

export default Profiles;
