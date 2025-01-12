import nautilus from "../assets/nautilus.PNG";
import heatedGardens from "../assets/heatedGardens.jpg";
import medicasafe from "../assets/medicasafe.jfif";

const projects = {
    0: {
        title: "Nautilus",
        image: nautilus,
        description: (
            <>
                <p>
                    Investment Banking Onboarding Platform
                </p>
            </>
        ),
        website: "https://nautilusonboarding.com/"
    },
    1: {
        title: "Heated Gardens",
        image: heatedGardens,
        description: (
            <>
                <p>
                    Outdoor Cold Weather Growing System
                </p>
            </>
        ),
    },
    2: {
        title: "Buprenorphine Dispenser",
        image: medicasafe,
        description: (
            <>
                <p>
                    Locked handheld pill dispenser for opioid use disorder treatment
                </p>
            </>
        ),
    },
};

export default projects;