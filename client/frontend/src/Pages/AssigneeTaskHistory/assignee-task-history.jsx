import styles from './styles.module.css'
import ProfileImg1 from './assets/profile1.png'
import ProfileImg2 from './assets/profile2.png'
// import items from './data'

export default function AssigneeTaskHistory() {
    return (
       <>
         <div className={styles.cont}>
            <div className={styles.history__title}>
                Design System for Mixed Reality Applications
            </div>

            <div className={styles.history__body}>
                <span className={styles.label}>Design</span>
                <p className={styles.para}>
                    "An agency has just hired you to make a design for mixed reality applications. It will be used for training new employees for the factories or in the medical industrty. You can choose between the both, each application will have it's own constraints so choose carefully."
                </p>

                <div className={styles.status__section}>
                    <div className={styles.status__text}>
                        <span>Supporting links:</span> <h6>N/A</h6>
                    </div>
                    <div className={styles.status__text}>
                        <span>Deadline:</span> <h6>November 24th, Thursday 12pm </h6>
                        <span>&nbsp; WAT</span>
                    </div>
                    <div  className={styles.status__text}>
                    <span>Created:</span> <h6>November 21st, Monday 12pm </h6><span>&nbsp; WAT</span>
                </div>

                <div className={styles.status__bar}>
                    <div><span className={styles.status__active}></span></div>
                    Deadline elapsed
                </div>
            </div>

            <span className={styles.hr__rule}></span>

            <div className={styles.comment_section}>
                <h4>Comments</h4>
                <div className={styles.comments__profile}>
                    <img src={ProfileImg1} alt="" />
                    <div>
                        <h5>Jamed Bond <span className={styles.comment__time}>10:10 AM</span></h5>
                        <p>
                            Completed
                        </p>
                    </div>
                </div>

                <div className={styles.comments__profile}>
                    <img src={ProfileImg2} alt="" />
                    <div>
                        <h5>Samuel.IO<span className={styles.comment__time}>10:10 AM</span></h5>
                        <p>
                            Completed
                        </p>
                    </div>
                </div>
            </div>


        </div>

        </div >

        <div className={styles.cont}>
            <div className={styles.history__title}>
                Assign Zuri Chat Tickets
            </div>

            <div className={styles.history__body}>
                <span className={styles.label}>Product Management</span>
                <p className={styles.para}>
                    "An agency has just hired you to make a design for mixed reality applications. It will be used for training new employees for the factories or in the medical industrty. You can choose between the both, each application will have it's own constraints so choose carefully."
                </p>

                <div className={styles.status__section}>
                    <div className={styles.status__text}>
                        <span>Supporting links:</span> <h6>N/A</h6>
                    </div>
                    <div className={styles.status__text}>
                        <span>Deadline:</span> <h6>November 24th, Thursday 12pm </h6>
                        <span>&nbsp; WAT</span>
                    </div>
                    <div  className={styles.status__text}>
                    <span>Created:</span> <h6>November 21st, Monday 12pm </h6><span>&nbsp; WAT</span>
                </div>

                <div className={styles.status__bar}>
                    <div><span className={styles.status__active}></span></div>
                    Deadline elapsed
                </div>
            </div>

            <span className={styles.hr__rule}></span>

            <div className={styles.comment_section}>
                <h4>Comments</h4>
                <div className={styles.comments__profile}>
                    <img src={ProfileImg1} alt="" />
                    <div>
                        <h5>Jamed Bond <span className={styles.comment__time}>10:10 AM</span></h5>
                        <p>
                            Completed
                        </p>
                    </div>
                </div>

                <div className={styles.comments__profile}>
                    <img src={ProfileImg2} alt="" />
                    <div>
                        <h5>Samuel.IO<span className={styles.comment__time}>10:10 AM</span></h5>
                        <p>
                            Completed
                        </p>
                    </div>
                </div>
            </div>


        </div>

        </div >
       </>
    )
}