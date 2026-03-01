import { Info, Target, ShieldCheck, Heart, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-24 sm:py-32 space-y-32">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="inline-flex p-5 rounded-[2.5rem] bg-amber-50 text-amber-600 shadow-xl shadow-amber-100/50 mb-8 border border-amber-100 hover:scale-110 transition-transform">
                    <Info className="h-10 w-10" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tightest leading-tight">Beyond Service.<br />Towards Humanity.</h1>
                <div className="h-2 w-24 bg-amber-400 mx-auto rounded-full"></div>
                <p className="text-gray-500 font-medium text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-80 italic">
                    NSS is not just an organization; it's a movement of conscious youth building a resilient nation through empathy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative pt-12">
                {[
                    { icon: <Target className="h-8 w-8 text-blue-600" />, title: 'Mission', desc: 'To provide youth with opportunities to participate in community service and develop personality.' },
                    { icon: <Globe className="h-8 w-8 text-emerald-600" />, title: 'Vision', desc: 'To build a society where every individual is committed to social justice and common welfare.' },
                    { icon: <Heart className="h-8 w-8 text-rose-600" />, title: 'Values', desc: 'Compassion, Integrity, Solidarity, and the belief in "Not Me, But You".' }
                ].map((item, i) => (
                    <div key={i} className="group p-12 bg-white rounded-[3.5rem] shadow-2xl shadow-gray-100 hover:shadow-primary-100/20 transition-all duration-500 border border-transparent hover:border-gray-50 active:scale-95 text-center flex flex-col items-center">
                        <div className="mb-8 p-6 rounded-[2rem] bg-gray-50 group-hover:bg-primary-50 transition-colors shadow-inner">{item.icon}</div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tighter mb-6 uppercase tracking-widest">{item.title}</h3>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
