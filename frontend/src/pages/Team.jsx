import React from 'react';
import { Mail, Linkedin, Twitter, ExternalLink, User } from 'lucide-react';

const Team = () => {
    const professors = [
        {
            name: "Prof. Meghana Tare",
            role: "Program Coordinator",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
        }
    ];

    const officeBearers = [
        {
            name: "Parth Pahade",
            role: "President",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        },
        {
            name: "Harshit Jhawar",
            role: "Vice President",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
        },
        {
            name: "Devansh Sureka",
            role: "Secretary",
            image: "https://images.unsplash.com/photo-1542343633-ce325652442e?w=400&h=400&fit=crop"
        }
    ];

    const coordinators = [
        { name: "Sitaram Prajapat", role: "School Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
        { name: "Shreena Kansagra", role: "School Coordinator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Bhuvanyu Kumar Sharma", role: "Health & Public Awareness Coordinator", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
        { name: "Samridhi Agrawal", role: "Health & Public Awareness Coordinator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
        { name: "Siddharth Bhamidipati", role: "Parishodh Coordinator", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop" },
        { name: "Aayush Katakwar", role: "Computer Literacy Programme Coordinator", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
        { name: "Arin Samant", role: "Computer Literacy Programme Coordinator", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" },
        { name: "Shivansh Saxena", role: "Umang Coordinator", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    ];

    const TeamMember = ({ member, size = "large" }) => (
        <div className="flex flex-col items-center group transform transition-all duration-300 hover:-translate-y-2">
            <div className={`relative mb-4 ${size === "large" ? "w-48 h-48 md:w-56 md:h-56" : "w-36 h-36 md:w-44 md:h-44"} rounded-full p-2 bg-white dark:bg-gray-800 shadow-xl shadow-purple-200/50 dark:shadow-purple-900/30 group-hover:shadow-purple-300/60 dark:group-hover:shadow-purple-500/40 transition-all overflow-hidden border-2 border-transparent group-hover:border-purple-400 dark:group-hover:border-purple-500`}>
                <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
            <h3 className={`font-black text-gray-900 dark:text-white ${size === "large" ? "text-xl" : "text-lg"} mb-1 text-center tracking-tight transition-colors`}>
                {member.name}
            </h3>
            <p className={`text-purple-600 dark:text-purple-400 font-bold uppercase ${size === "large" ? "text-xs" : "text-[10px]"} tracking-widest text-center max-w-[200px] transition-colors`}>
                {member.role}
            </p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f3f0ff] dark:bg-[#0f111a] py-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 dark:bg-black/20 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-32">
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
                        Our Team
                    </h1>
                    <div className="w-40 h-2 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 mx-auto rounded-full mb-10 shadow-sm shadow-purple-100 dark:shadow-purple-900/20"></div>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        The visionary leadership and dedicated volunteers behind the impact of NSS NIT Hamirpur.
                    </p>
                </div>

                {/* Professors Section */}
                <section className="mb-32">
                    <h2 className="text-sm font-black text-center text-purple-400 dark:text-purple-300 mb-12 uppercase tracking-[0.4em]">
                        Executive Advisory
                    </h2>
                    <div className="flex justify-center">
                        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl shadow-purple-200/30 dark:shadow-purple-900/20 border border-white dark:border-gray-700 flex flex-col items-center max-w-sm w-full transition-all hover:scale-[1.02] hover:shadow-purple-200/50 duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 dark:bg-purple-900/20 rounded-full -mr-20 -mt-20 transition-all group-hover:scale-125 duration-700"></div>
                            <div className="relative z-10 w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-8 shadow-inner border border-white dark:border-gray-700">
                                <User className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                            </div>
                            <h3 className="relative z-10 text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{professors[0].name}</h3>
                            <div className="relative z-10 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {professors[0].role}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Office Bearers Section */}
                <section className="mb-32">
                    <h2 className="text-sm font-black text-center text-purple-400 dark:text-purple-300 mb-20 uppercase tracking-[0.4em]">
                        Office Bearers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 justify-items-center px-4">
                        {officeBearers.map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))}
                    </div>
                </section>

                {/* Department Coordinators Section */}
                <section className="pb-24">
                    <div className="flex items-center justify-center space-x-6 mb-24">
                        <div className="h-px bg-purple-200 dark:bg-purple-800 flex-1 max-w-[100px]"></div>
                        <h2 className="text-sm font-black text-purple-400 dark:text-purple-300 uppercase tracking-[0.4em]">
                            Department Coordinators
                        </h2>
                        <div className="h-px bg-purple-200 dark:bg-purple-800 flex-1 max-w-[100px]"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-12 px-4">
                        {coordinators.map((member, index) => (
                            <TeamMember key={index} member={member} size="medium" />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Team;
