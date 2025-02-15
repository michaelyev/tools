import Container from "@component/Container";
import styles from "./Facts.module.css"; // Подключаем стили
import Card from "@component/Card";
import Box from "@component/Box";
import NextImage from "@component/NextImage";
import Typography from "@component/Typography";

export default function Facts() {
  return (
    <Container mb='70px'>
      <div className={styles.container}>
        {/* Маленькие элементы */}
        <div className={styles.smallItems}>
          <Card
            hoverEffect
            p="0.5rem"
            display="flex"
            flexDirection="column"
            height="172px"
            width="180px"
            style={{ flex: "0 0 auto" }}
                        borderRadius={8}
            boxShadow="small"
            alignItems="flex-start"
            justifyContent="space-between"
            backgroundColor="#f5f5f5"
          >
            <Box display="flex" alignItems="center" gap="8px">
              <Box width={40} height={40}>
                <NextImage
                  width={40}
                  height={40}
                  alt="about-company"
                  src="/assets/images/icons/automotive.svg"
                />
              </Box>
              <Typography fontWeight={600} fontSize={14}>
                About Us
              </Typography>
            </Box>
            <Typography fontSize={12} color="gray">
              A trusted marketplace for tools and rentals.
            </Typography>
            <a
              href="/about"
              style={{ color: "#1976d2", textDecoration: "none", fontSize: 12 }}
            >
              Learn More
            </a>
          </Card>

          {/* Card 2: Маркетплейс */}
          <Card
            hoverEffect
            p="0.5rem"
            display="flex"
            flexDirection="column"
            height="172px"
            width="180px"
            borderRadius={8}
            boxShadow="small"
            alignItems="flex-start"
            justifyContent="space-between"
            backgroundColor="#e3f2fd"
            style={{ flex: "0 0 auto" }}
          >
            <Box display="flex" alignItems="center" gap="8px">
              <Box width={40} height={40}>
                <NextImage
                  width={40}
                  height={40}
                  alt="marketplace"
                  src="/assets/images/icons/bag.svg"
                />
              </Box>
              <Typography fontWeight={600} fontSize={14}>
                Marketplace
              </Typography>
            </Box>
            <Typography fontSize={12} color="gray">
              Browse tools for rent or sale.
            </Typography>
            <a
              href="/marketplace"
              style={{ color: "#1976d2", textDecoration: "none", fontSize: 12 }}
            >
              Explore
            </a>
          </Card>

          {/* Card 3: Пункты выдачи */}
          <Card
            hoverEffect
            p="0.5rem"
            display="flex"
            flexDirection="column"
            height="172px"
            width="180px"
            borderRadius={8}
            boxShadow="small"
            alignItems="flex-start"
            justifyContent="space-between"
            backgroundColor="#f1f8e9"
            style={{ flex: "0 0 auto" }}
          >
            <Box display="flex" alignItems="center" gap="8px">
              <Box width={40} height={40}>
                <NextImage
                  width={40}
                  height={40}
                  alt="pickup-delivery"
                  src="/assets/images/icons/categories.svg"
                />
              </Box>
              <Typography fontWeight={600} fontSize={14}>
                Pickup & Delivery
              </Typography>
            </Box>
            <Typography fontSize={12} color="gray">
              Fast and convenient local services.
            </Typography>
            <a
              href="/pickup"
              style={{ color: "#1976d2", textDecoration: "none", fontSize: 12 }}
            >
              Learn More
            </a>
          </Card>
        </div>

        {/* Большой элемент */}
        <div className={styles.largeItem}>
          <img
            style={{ borderRadius: 8, width: "100%", height: "172px" }}
            src="/assets/images/banners/Facts/facts_large.png"
          />
        </div>
      </div>
    </Container>
  );
}
