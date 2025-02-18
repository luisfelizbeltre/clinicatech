const ProcesoReparacion = () => {
    const pasos = [
        { icon: "🔍", title: "Diagnóstico", description: "Evaluamos el problema de tu dispositivo." },
        { icon: "💵", title: "Presupuesto", description: "Te enviamos un presupuesto sin compromiso." },
        { icon: "🛠️", title: "Reparación", description: "Reparamos tu dispositivo con piezas de calidad." },
        { icon: "📦", title: "Entrega", description: "Te devolvemos tu dispositivo como nuevo." },
    ];

    return (
        <div className=" bg-blue-50 py-16">
                   <p className='bg-white w-full h-6 mb-7' ></p> 

            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestro Proceso</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {pasos.map((paso, index) => (
                        <div 
                            key={index} 
                            className="p-6 bg-gray-50 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
                        >
                            <span className="text-4xl mb-4">{paso.icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{paso.title}</h3>
                            <p className="text-gray-600">{paso.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcesoReparacion;
