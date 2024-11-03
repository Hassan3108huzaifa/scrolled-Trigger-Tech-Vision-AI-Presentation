
import React from 'react'

import { MotionValue } from 'framer-motion';

interface ContentSectionProps {
    contentY: MotionValue<string>;
}

const ContentSection: React.FC<ContentSectionProps> = () => {
    return (
        <div className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Machine Learning</h3>
                        <p className="text-gray-600">
                            Develop intelligent systems that learn and improve from experience, enabling predictive analytics and automated decision-making.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Natural Language Processing</h3>
                        <p className="text-gray-600">
                            Create AI-powered language models that understand, interpret, and generate human-like text for various applications.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Computer Vision</h3>
                        <p className="text-gray-600">
                            Build advanced image and video analysis systems for object detection, facial recognition, and visual data interpretation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection