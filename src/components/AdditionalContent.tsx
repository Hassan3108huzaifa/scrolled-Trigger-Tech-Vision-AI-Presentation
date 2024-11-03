import React from 'react'

const AdditionalContent = () => {
    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose TechVision AI?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cutting-edge Technology</h3>
                        <p className="text-gray-600">
                            We leverage the latest advancements in AI and machine learning to deliver state-of-the-art solutions.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
                        <p className="text-gray-600">
                            Our team of AI specialists, data scientists, and engineers brings years of experience and innovation to every project.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Customized Solutions</h3>
                        <p className="text-gray-600">
                            We tailor our AI technologies to meet the unique needs and challenges of your business or industry.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Scalable and Future-proof</h3>
                        <p className="text-gray-600">
                            Our solutions are designed to grow with your business and adapt to future technological advancements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalContent