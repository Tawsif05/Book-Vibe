import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <h1 className="h-24 bg-[#1313130D] text-black text-3xl font-bold rounded-3xl flex items-center justify-center">About Us</h1>
            <div className="mt-3 work-sans-font">
                <p>Hey there, bookworms! We’re The Book Vibe, and we’re all about spreading bookish love. We’re not your typical book-selling platform; we’re a passionate bunch of book enthusiasts on a mission to connect you with your next great read.</p><br /><br />
                <p>
                    Our Story: The Book Vibe was born from a shared love of books. We’ve all experienced that magical feeling of losing ourselves in a captivating story and wanted to create a place where readers can come together and share their literary adventures.
                </p><br /><br />
                <p>
                    Our Mission: We’re here to make your reading journey extraordinary. We’ve carefully curated a collection of books that spans every genre and interest. Whether you’re into thrilling mysteries, heartwarming romances, mind-bending sci-fi, or something else entirely, we’ve got you covered.
                </p>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-medium playfair-display-font">Why Choose The Book Vibe?</h1>

                <ul className="mt-6 list-disc work-sans-font">
                    <li>Community Connection: We’re more than just a platform; we’re a community of book lovers. Join us to chat, share recommendations, and connect with like-minded readers.</li>
                    <li>Curated Excellence: We believe in quality over quantity. You’ll find top-notch books on our shelves that we’re sure you’ll adore.</li>
                    <li>Author Appreciation: We’re staunch supporters of authors and their creative journeys. By choosing us, you’re helping writers pursue their passion.</li>
                    <li>Engage and Explore: Dive into our book clubs, author events, and lively discussions. There’s always something exciting happening in our bookish world</li>
                </ul>
            </div>
            <div className="mt-10 space-y-4">
                <h1 className="text-xl font-medium playfair-display-font">Join Our Literary Adventure</h1>
                <p className='work-sans-font'>Whether you’re a seasoned reader or just starting your bookish journey, The Book Vibe is your haven. Explore our collection, connect with fellow readers, and embark on new reading adventures. Your next literary gem is just a click away</p>
                <p className='work-sans-font'>So, come on in and be part of our book-loving family. Let’s turn the pages of amazing stories together!</p>
            </div>
        </div>
    );
};

export default AboutUs;