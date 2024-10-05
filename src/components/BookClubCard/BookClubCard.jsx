import PropTypes from 'prop-types';

const BookClubCard = ({club}) => {
    const {clubName, meetingFrequency, description,location, contactEmail, rating, category} = club;
    return (
        <div className="border rounded-3xl">
            <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Club Name: {clubName} </h2>
                    <p className="font-medium">Meeting: {meetingFrequency} </p>
                    <div className="flex items-center space-x-4">
                        <h1 className="font-bold">Tag</h1>
                        <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full'># {contactEmail}</div>
                        <div className='bg-[#23BE0A0D] p-2 px-4 text-green-500 rounded-full'># {location} </div>
                        
                    </div>
                    <div className="flex gap-6">
                        <div>
                            {description}
                        </div>
                        
                    </div>
                    <hr />
                    <div className="flex gap-5">
                        <div className="bg-[#328EFF26] p-3 rounded-full text-[#328EFF] px-4">
                            Category: {category}
                        </div>
                        <div className="bg-[#FFAC3326] p-3 rounded-full text-[#FFAC33] px-4" >
                            Rating: {rating}
                        </div>
                        <div className="bg-green-500 p-3 rounded-full text-white px-4" >
                            View Detail
                        </div>
                    </div>
                </div>
        </div>
    );
};

BookClubCard.propTypes ={
    club: PropTypes.object.isRequired,
}

export default BookClubCard;