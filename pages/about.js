import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex p-4">
      {/* Profile Box 1 */}
      <div className="flex flex-col items-center flex-1 p-4 space-y-4">
        <Image
          src="/images/profile_andy.png"
          alt="Andy's Profile Picture"
          className="flex-shrink-0 object-cover overflow-hidden rounded-full h-36 md:w-48 md:h-48"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-center">Andrew Lockyer</h2>
          <h3 className="text-sm text-center text-gray-600">Business English Coach</h3>
          <p className="pb-6 mt-2">
            Andrew is an experienced English language teacher based in Mexico with a proven record in English language teaching and academic management over the last 8 years.

            Prior to teaching, Andrew graduated from Nottingham Trent University with a Bachelor's degree in Business Management and Accounting & Finance, which included a 1-year work placement in the finance department of a prominent pharmaceutical company. During this role Andrew developed his knowledge of Accounting and Finance procedures within a fast-paced international environment. His position also gave him a wide-range of experience working with clients and colleagues both internally and externally. Despite being offered a full-time role at the company following his graduation, Andrew chose to move to Mexico in order to fulfill his desire of living abroad in order to learn about a new culture and a new language.

            Andrew currently works as a freelance Business English teacher and examiner, having spent 6 years previously working in a variety of schools in Mexico, first as a teacher, and then in academic management roles. Andrew's experience has allowed him to work with a range of students ranging across different cultures and varying levels of English. His management experience has also given him an insight into the challenges faced within businesses when it comes to recruitment, reducing staff turnover, developing effective teams and handling client relations. He has also led a number of projects such as the Model United Nations and the inter school debate team, which have allowed his students to develop their English skills whilst also increasing awareness of global issues. 

            Alongside his current job, Andrew also works as a speaking and writing examiner for Cambridge English and IELTS exams. This experience has allowed him to further understand what is required from his students in order to develop their professional English skills and achieve their language learning goals.

            Andrew is currently looking for new opportunities, in and out of Mexico, to further his professional development whether it be in the education industry or within the world of business and finance. He has a strong desire to remain working in an international environment, which will allow him to learn new languages in a professional capacity. Outside of work, Andrew loves the outdoors, enjoys all sports and is a keen runner.  
          </p>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="mx-4 border border-gray-300 h-100 "></div> 

      {/* Profile Box 2 */}
      <div className="flex flex-col items-center flex-1 p-4 space-y-4">
        <Image
          src="/images/profile_james.jpg"
          alt="Profile 2"
          className="flex-shrink-0 object-cover overflow-hidden rounded-full w-36 h-36 md:w-48 md:h-48"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-center">James Ian Caddick</h2>
          <h3 className="text-sm text-center text-gray-600"> Business English Coach | Full stack Developer | Co-founder | Director at JIC Investments Ltd. | Family man | Philantropist | </h3>
          <p className="pb-6 mt-2">
            James is a professional language coach with over 3 years of experience and success in coaching business professionals and young adults. With a wealth of experience in several fields his interests and experience are broad in scope. Having cofounded multiple large cultural and entertainment venues across Latin America he understands the pressures and challenges of managing business internationally in a second language. As well as co-managing one of these venues, James is currently operating a few Short Term Let properties in the south and south west of England, with a view to building a larger property portfolio through developments over the coming year.

            He graduated from The University of Derby with a Bachelor of Science in Psychology before working as an electrical technician and going on to a rewarding employment with Jaguar Land Rover where he earnt an NVQ level 2 in business improvement techniques.

            James is also a full stack developer with a passion for creating and building dynamic web applications. Skilled in JavaScript, Typescript, React, Redux, Next.js, Ruby, RoR, Node, PostgreSQL, MariaDB, Jest, Rspec, and Shopify, he has built and maintained several websites and web applications for his own businesses and for clients; in fact, he coded this very website! Having spent time working for a California based CRM start-up he understands the impossible nature of juggling a fulltime tech career with his other business interests and family life so, for now, coding is more of a sidehustle and a hobby than a fulltime career.
            
            As well as his business endeavours he's been supporting his wife in the running and operations of Colombian NGO, Concretemos. Initially supporting victims of violence and displaced citizens, the NGO has gone on to broaden its horizons and now also focuses on social and environmental projects in the districts of Antioquia and El Meta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
