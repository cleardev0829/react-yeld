import React from "react";

const members_group1 = [
    {
        name: "Dave Norton",
        role: "Community Leader",
        photo: "img/dave.png"
    },
    {
        name: "Dominic Vern",
        role: "Community Front End Developer",
        photo: "img/dominic.png"
    },
    {
        name: "Pavil Aferdita",
        role: "Community Yield Farm Developer and Head Developer",
        photo: "img/pavil.png"
    },
]

const members_group2 = [
    {
        name: "Lorraine Kristeen",
        role: "Community Project and Social Manager",
        photo: "img/lorraine.png"
    },
    {
        name: "Danka Maria",
        role: "Community Graphic Designer",
        photo: "img/danka.png"
    }
]

export const Member: React.FC = () => {
    return (
        <>
            <div className="pricing-3 section" id="team">
                <div className="teamContainer">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto text-center">
                            <h2 className="title">Team Member</h2>
                            <div className="section-space"></div>
                        </div>
                    </div>
                    <div className="row">
                        {members_group1.map(member =>
                            <div className="column">
                                <div className="team1">
                                    <div className="team-img">
                                        <img src={member.photo} alt="Member" />
                                    </div>
                                    <div className="team-content">
                                        <h2>{member.name}</h2>
                                        <h3>{member.role}</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="column" style={{ marginLeft: 'auto' }}>
                            <div className="team1">
                                <div className="team-img">
                                    <img src={members_group2[0].photo} alt="Member" />
                                </div>
                                <div className="team-content">
                                    <h2>{members_group2[0].name}</h2>
                                    <h3>{members_group2[0].role}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="column" style={{ marginRight: 'auto' }}>
                            <div className="team1">
                                <div className="team-img">
                                    <img src={members_group2[1].photo} alt="Member" />
                                </div>
                                <div className="team-content">
                                    <h2>{members_group2[1].name}</h2>
                                    <h3>{members_group2[1].role}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--     *********    END PRICING 3      *********      --> */}
        </>
    );
};

export default Member;