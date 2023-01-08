
import styles from "./Main.module.css"
import bandeira1 from "./assets/imagens1/bandeira1.png"
import bandeira2 from "./assets/imagens1/bandeira2.png"
import bandeira3 from "./assets/imagens1/bandeira3.png"
import bandeira4 from "./assets/imagens1/bandeira4.png"
import bandeira5 from "./assets/imagens1/bandeira5.png"
import bandeira6 from "./assets/imagens1/bandeira6.png"
import bandeira8 from "./assets/imagens1/bandeira8.png"
import bandeira9 from "./assets/imagens1/bandeira9.png"
import bandeira10 from "./assets/imagens1/bandeira10.png"
import bandeira11 from "./assets/imagens2/bandeira11.png"
import bandeira12 from "./assets/imagens2/bandeira12.png"
import bandeira13 from "./assets/imagens2/bandeira13.png"


function Main (){

    return (
        <div>
            <main>
            <section className={styles.mexerNoH}>
                <h2 className={styles.show}> show de bola</h2>

            </section>
          <section className={styles.imagemBandeiras}>
            <div>
                <img className={styles.Bandeiras} src={bandeira1} alt="catar"/>
                <img className={styles.Bandeiras} src={bandeira2} alt=""/>
                <img className={styles.Bandeiras} src={bandeira3} alt=""/>
                <img className={styles.Bandeiras} src={bandeira4} alt=""/>

            </div>
            <div>
                <img className={styles.Bandeiras} src={bandeira5} alt="catar"/>
                <img className={styles.Bandeiras} src={bandeira6} alt=""/>
                <img className={styles.Bandeiras} src={bandeira8} alt=""/>
                <img className={styles.Bandeiras} src={bandeira9} alt=""/>

            </div>
            <div>
                <img className={styles.Bandeiras} src={bandeira10} alt="catar"/>
                <img className={styles.Bandeiras} src={bandeira11} alt=""/>
                <img className={styles.Bandeiras} src={bandeira12} alt=""/>
                <img className={styles.Bandeiras} src={bandeira13} alt=""/>

            </div>

          </section>
          </main>
        </ div>
    )
}

export default Main
