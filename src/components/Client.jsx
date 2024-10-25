/* eslint-disable react/no-unescaped-entities */
import suruchiLogo from "../assets/images/suruchi-logo.jpg";
import alishanLogo from "../assets/images/alishan-logo.jpg";
import shreeLaxmiLogo from "../assets/images/shree-laxmi-logo.jpg";
import minuliLogo from "../assets/images/minuli-logo.jpg";
import credaiLogo from "../assets/images/credai-logo.jpg";
import auraLogo from "../assets/images/aura-logo.jpg";
import partyStudioLogo from "../assets/images/party-studio-logo.jpg";
import raArchitectsLogo from "../assets/images/ra-architects-logo.jpg";
import sattvaJivanLogo from "../assets/images/sattva-jivan-logo.jpg";
import securetechLogo from "../assets/images/securetech-solutions-logo.jpg";
import shreeShyamLogo from "../assets/images/shree-shyam-logo.jpg";
import vedsonsLogo from "../assets/images/vedsons-logo.jpg";
import propertyClinicLogo from "../assets/images/property-clinic-logo.jpg";
import sheraBanoLogo from "../assets/images/shera-bano-merchant-logo.jpg";
import agoraLogo from "../assets/images/agora-logo.jpg";
import akTutorialLogo from "../assets/images/ak-tutorial-logo.jpg";
import amStudioLogo from "../assets/images/am-studio-logo.jpg";
import annapurnaLogo from "../assets/images/annapurna-logo.jpg";

const clients = [
  { name: "Suruchi", imageUrl: suruchiLogo },
  { name: "Alishan", imageUrl: alishanLogo },
  { name: "Shree Laxmi Venture", imageUrl: shreeLaxmiLogo },
  { name: "Minuli Group", imageUrl: minuliLogo },
  { name: "Credai", imageUrl: credaiLogo },
  { name: "Aura", imageUrl: auraLogo },
  { name: "Party Studio", imageUrl: partyStudioLogo },
  { name: "RA Architects", imageUrl: raArchitectsLogo },
  { name: "Sattva Jivan", imageUrl: sattvaJivanLogo },
  { name: "Securetech", imageUrl: securetechLogo },
  { name: "Shree Shyam Group", imageUrl: shreeShyamLogo },
  { name: "Vedsons", imageUrl: vedsonsLogo },
  { name: "Property Clinic", imageUrl: propertyClinicLogo },
  { name: "Shera Bano Merchant", imageUrl: sheraBanoLogo },
  { name: "Agora", imageUrl: agoraLogo },
  { name: "A.K. Tutorial", imageUrl: akTutorialLogo },
  { name: "AM Studio", imageUrl: amStudioLogo },
  { name: "Annapurna", imageUrl: annapurnaLogo },
];

const ClientSection = () => {
  return (
    <section className="bg-yellow-500 py-12 text-center">
      <div className="px-4 lg:w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">
          Say Hi To Our Clients
        </h2>
        <p className="mb-12 text-sm lg:text-[17px] font-medium font-poppins lg:px-14">
          "We've been honoured to create brands, devise products, and launch
          campaigns for many clients whom we call friends. We like them, and
          they seem to like us back."
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto lg:px-14">
          {clients.map((client, index) => (
            <div key={index} className="relative group">
              {client.imageUrl && (
                <div className="bg-white p-4 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={client.imageUrl}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-24 object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-8 bg-black text-white px-6 py-2 font-medium border border-white">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default ClientSection;
