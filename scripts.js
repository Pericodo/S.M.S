document.querySelectorAll('.exoplanet').forEach(exoplanet => {
    exoplanet.addEventListener('click', () => {
        // Si el exoplaneta ya está expandido, vuelve a su lugar original
        if (exoplanet.classList.contains('expanded')) {
            exoplanet.classList.remove('expanded');
        } else {
            // Remover la clase 'expanded' de cualquier otro exoplaneta expandido
            document.querySelectorAll('.exoplanet.expanded').forEach(exp => {
                exp.classList.remove('expanded');
            });
            // Añadir la clase 'expanded' al exoplaneta seleccionado
            exoplanet.classList.add('expanded');
        }
    });
});