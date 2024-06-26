const button = document.querySelector('button');
const menu = document.getElementById('mobile-menu');


function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const svgs = document.querySelectorAll('button svg');
    menu.classList.toggle('hidden');
    svgs.forEach(svg => svg.classList.toggle('hidden'));
}

        document.addEventListener("DOMContentLoaded", function() {
            const galleries = {
                picasso: {
                    title: "Galerie Picasso",
                    images: [
                        { src: "img/Autoportrait_Picasso.png", desc: "Autoportrait Picasso" },
                        { src: "img/Demoiselles_Avignon.png", desc: "Demoiselles d'Avignon" },
                        { src: "img/guernica.png", desc: "Guernika" },
                        { src: "img/Femme_qui_pleure.png", desc: "Femme qui pleure" },
                        { src: "img/Le_Peintre_et_son_Modele.png", desc: "Le Peintre et son Modele" },
                        { src: "img/Marie_Therese.png", desc: "Marie Therese" }
                    ]
                },
                caillebotte: {
                    title: "Galerie Caillebotte",
                    images: [
                        { src: "img/Autoportrait_Caillebotte.png", desc: "Autoportrait Caillebotte"},
                        { src: "img/Raboteurs_de_parquet.png", desc: "Raboteurs de parquets"},
                        { src: "img/Peintres_en_batiment.png", desc: "Peintres en batiment"},
                        { src: "img/Jour_de_pluie_à_Paris.png", desc: "Jour de pluie à Paris" },
                        { src: "img/Périssoires_sur_l’Yerres.png", desc: "Périssoires sur l'yerres"}
                    ]
                },
                vermeer: {
                    title: "Galerie Vermeer",
                    images: [
                        { src: "img/fille_a_la-perle.png", desc: "Fille a la perle" },
                        { src: "img/La_Laitière.png", desc: "La laitière" },
                        { src: "img/La_Liseuse_à_la_fenêtre.png", desc: "La liseuse à la fenêtre"}
                    ]
                },
                kandinsky: {
                    title: "Galerie Kandinsky",
                    images: [
                        { src: "img/Composition-1939.png", desc: "Composition 1939" },
                        { src: "img/Composition-VI-1913.png", desc: "Composition 1939" },
                        { src: "img/Jaune_rouge_bleu.png", desc: "Jaune rouge bleu" },
                        { src: "img/Moscou-1916.png", desc: "Moscou 1916"},
                        { src: "img/Noir-et-violet-1923.png", desc: "Noir et violet 1923"},
                        { src: "img/tableau-en-bleu-1925-.png", desc: "Tableau en bleu 1925"}
                        

                    ]
                },
                monet: {
                    title: "Galerie Monet",
                    images: [
                        { src: "img/Impression_soleil_levant-1872.png", desc: "Impression soleil levant" },
                        { src: "img/La_Promenade.png", desc: "La Promenade" },
                        { src: "img/Le_déjeuner-1873.png", desc: "Le dejeuner" },
                        { src: "img/Les_Coquelicots.png", desc: "Les coquelicots"},
                        {src: "img/Madame_Monet_et_Enfant-1875.png", desc: "Mme Monet et Enfant"},
                        {src: "img/Nymphéas-1916.png", desc: "Nymphéas 1916"}
                    ]
                },
                vangogh: {
                    title: "Galerie Van Gogh",
                    images: [
                        { src: "img/Campagne_Montagneuse-1889.jpg", desc: "Campagne Montagneuse" },
                        { src: "img/La_Chambre_de_van_gogh-1889-.png", desc: "La Chambre de van gogh"},
                        { src: "img/La_nuit_étoilée-1889.png", desc: "La Nuit étoilée"},
                        { src: "img/La_Sieste.png", desc: "La Sieste"},
                        { src: "img/Les_iris-1889.png", desc: "Les iris"},
                        { src: "img/Terrasse_café.png", desc: "Terrasse de café"}
                    ]
                }
            };
        
            function updateGallery(gallery) {
                const galleryTitle = document.getElementById("titre_galerie");
                const galleryContainer = document.getElementById("gallery");
        
                galleryTitle.textContent = gallery.title;
        
                galleryContainer.innerHTML = gallery.images.map(image => `
                    <div class="w-full md:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded overflow-hidden">
                            <img src="${image.src}" alt="${image.desc}" class="w-full h-64 object-cover">
                            <div class="p-4 border-t hover:bg-black hover:text-white">
                                <p>${image.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join("");
            }
        
            document.querySelectorAll("nav ul li").forEach(li => {
                li.addEventListener("click", function() {
                    const galleryId = this.id.split("-")[0]; // "picasso", "caillebotte", etc.
                    updateGallery(galleries[galleryId]);
                });
            });
        
            // Initial gallery load
            updateGallery(galleries.picasso);
        });
        
        
        