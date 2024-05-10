const Loader = () => {
  return <div>Loader</div>;
};

export default Loader;

// Індикатор завантаження
//Компонент Loader відображається під галереєю поки відбувається завантаження зображень. Використовуй будь-який готовий компонент, наприклад react-loader-spinner або інший.

// Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.