import organisingCommittee from "@/data/organisingTeam"

export default function Orgcom() {
    return(
        <div className="w-full md:w-11/12 mx-auto">
            <h1 className="text-white text-5xl font-bold text-center mt-24 mb-8">Organising Committee</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {organisingCommittee.map((member, index) => (
                    <div key={index} className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                        <div className="relative overflow-hidden transition duration-300 transform p-5">
                        </div>
                        <h3 className="text-2xl tracking-widest text-gray-300">{member.name}</h3>
                        <p className="text-lg text-gray-400">{member.designation}</p>
                        <p className="text-lg text-gray-400">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}