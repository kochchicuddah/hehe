import styles from "./footer.module.css";

function Footer() {
    return (
        <>
            <div className={styles.containerFluid}>
                <div className={styles.cont1}>
                    <h3>Trail Ceylon</h3>
                    <h5>dfjfgj fjfgjfj ag segieuj ipoa uiluoiaugjl iaulgia ghslighsklgh lskdjgjlksdjg
                         lsdjglsjglsdlg jslgls jlksjg lsjgs g;sgog ;gosjg;g;ljgls glsjgshlsj;sdj ;sfs;
                    </h5>
                </div>
                <div className={styles.cont2}>
                    <h3>Company</h3>
                    <h5>Home</h5>
                    <h5>Wonders</h5>
                    <h5>Explore</h5>
                </div>
                <div className={styles.cont3}>
                    <h3>Contact</h3>
                    <h5>Why us?</h5>
                    <h5>Partner with us</h5>
                    <h5>FAQ</h5>
                    <h5>Blog</h5>
                </div>
                <div className={styles.cont4}>
                    <h3>Meet Us</h3>
                    <h5>011 222 2222</h5>
                    <h5>example@gmail.com</h5>
                    <h5>205, Samagi Mawatha, Delkanda</h5>
                </div>
            </div>
        </>
    );
}

export default Footer;