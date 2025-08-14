import { ShieldCheck, FileDown, BrainCircuit } from "lucide-react";

export default function PrivacyFeatures() {
  return (
    <section className="bg-black py-20 px-4 text-white relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Encrypted Storage */}
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 shadow-xl transition hover:shadow-fuchsia-500/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Encrypted Storage</h3>
            <p className="text-sm text-gray-400">
              Your data is encrypted both in transit and at rest using industry standards.
            </p>
          </div>

          {/* Export Anytime */}
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 shadow-xl transition hover:shadow-fuchsia-500/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
              <FileDown className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Export Anytime</h3>
            <p className="text-sm text-gray-400">
              Download your data in CSV or Excel format whenever you want.
            </p>
          </div>

          {/* No AI Training */}
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 shadow-xl transition hover:shadow-fuchsia-500/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
              <BrainCircuit className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No AI Training</h3>
            <p className="text-sm text-gray-400">
              We don’t use your data to train AI models or share with third parties.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-500 mt-16">
          We don’t sell or share your data. <span className="font-semibold text-white">Period.</span>
        </p>
      </div>
    </section>
  );
}
