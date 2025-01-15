document.addEventListener('DOMContentLoaded', function () {
    // Section extensible (parcours)
    const gridParcours = document.querySelector('.grid-parcours');
    const parcours = document.querySelector('.parcours');
    const button = document.getElementById('afficherplus');

    function checkIfSectionIsOutOfView() {
        const rect = parcours.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            if (gridParcours.classList.contains('expanded')) {
                gridParcours.classList.remove('expanded');
                parcours.style.height = 'calc(100vh - 80px)';
                button.textContent = 'Afficher plus';
            }
        }
    }

    window.addEventListener('scroll', checkIfSectionIsOutOfView);

    button.addEventListener('click', function () {
        gridParcours.classList.toggle('expanded');

        if (gridParcours.classList.contains('expanded')) {
            button.textContent = 'Réduire';
            parcours.style.height = '100%';
            parcours.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            button.textContent = 'Afficher plus';
            parcours.style.height = 'calc(100vh - 80px)';
        }
    });

    // Carrousel avec animation de défilement
    const carouselInner = document.querySelector('.carousel-inner');
    const totalGroups = document.querySelectorAll('.carousel-group').length;
    let currentGroupIndex = 0;
    let isAnimating = false; // Variable pour vérifier si une animation est en cours
    let autoSlideInterval; // Variable pour stocker l'intervalle du défilement automatique

    function slideCarousel(direction) {
        if (isAnimating) return; // Si une animation est déjà en cours, on arrête

        isAnimating = true;

        // Mise à jour de l'index avec logique circulaire
        currentGroupIndex = (currentGroupIndex + direction + totalGroups) % totalGroups;

        // Calcul du décalage
        const offset = -(currentGroupIndex * 100); // Chaque groupe occupe 100% de la largeur
        const currentTransform = carouselInner.style.transform.replace(/[^\d.-]/g, '') || 0;
        const start = parseFloat(currentTransform);
        const end = offset;
        const duration = 200; // Durée de l'animation en ms
        const startTime = performance.now();

        // Fonction pour l'animation
        function animateScroll(timestamp) {
            const progress = (timestamp - startTime) / duration;
            if (progress < 1) {
                // Calcul du décalage intermédiaire
                const currentPos = start + (end - start) * progress;
                carouselInner.style.transform = `translateX(${currentPos}%)`;
                requestAnimationFrame(animateScroll);
            } else {
                // Animation terminée
                carouselInner.style.transform = `translateX(${end}%)`;
                isAnimating = false;
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Boutons de navigation pour le carrousel
    document.querySelector('.prev-btn').addEventListener('click', function () {
        slideCarousel(-1); // Aller à l'élément précédent
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        slideCarousel(1); // Aller à l'élément suivant
    });

    // Fonction pour démarrer le défilement automatique
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            slideCarousel(1); // Avancer vers l'élément suivant
        }, 5000); // 3000 ms = 3 secondes
    }

    // Fonction pour arrêter le défilement automatique
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Démarrer le défilement automatique au chargement
    startAutoSlide();

    // Désactiver le défilement automatique lorsque la souris est sur le carrousel
    carouselInner.addEventListener('mouseenter', function() {
        stopAutoSlide(); // Arrêter le défilement automatique
    });

    // Réactiver le défilement automatique lorsque la souris quitte le carrousel
    carouselInner.addEventListener('mouseleave', function() {
        startAutoSlide(); // Redémarrer le défilement automatique
    });
});
