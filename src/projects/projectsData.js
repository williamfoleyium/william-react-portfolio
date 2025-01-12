import nautilus from "../assets/nautilus";
import heatedGardens from "../assets/heatedGardens";
import medicasafe from "../assets/medicasafe";

const projects = {
    1: {
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
    2: {
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
    3: {
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
}