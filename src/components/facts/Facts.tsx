import Container from "@component/Container";
import styles from "./Facts.module.css"; // Подключаем стили
import Image from "next/image";

export default function Facts() {
  return (
    <Container>
      <div className={styles.container}>
        {/* Маленькие элементы */}
        <div className={styles.smallItems}>
          <div className={`${styles.card} ${styles.cardRed}`}>
            1 500 000 товаров <br /> в наличии
          </div>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            99% заказов <br /> доставляем в срок
          </div>
          <div className={`${styles.card} ${styles.cardGreen}`}>
            1050+ магазинов <br /> по всей России
          </div>
        </div>

        {/* Большой элемент */}
        <div className={styles.largeItem}>
          <Image className="rounded-xl" height={150} width={582} src='/assets/images/banners/Facts/facts_large.png' />
        </div>
      </div>
    </Container>
  );
}
