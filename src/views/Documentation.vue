<template>
    <div class="p-4">
        <div class="container bg-light border">
            <div class="row">
                <div class="col">
                    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                            <br/>
                            <br/>
                            <div class="flex justify-center sm:justify-start sm:pt-0">
                                <div class="ml-4 text-lg leading-7 font-semibold">
                                    <a href="https://github.com/namoclopez2020/manzana-verde-frontend" target="_blank" class="underline text-gray-900 dark:text-white">
                                        Plataforma de pedidos - namoclopez2020
                                    </a>
                                </div>
                                <div class="ml-12">
                                    <div class="mt-2 text-gray-600 dark:text-gray-400 text-lg">
                                        Repositorio público en mi 
                                        <a href="https://github.com/namoclopez2020/manzana-verde-frontend" target="_blank" class="underline text-gray-900 dark:text-white">
                                            GitHub:
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                                <div class="grid grid-cols-1">
                                    <div class="p-6">
                                        <div class="flex items-center">
                                            <div class="text-lg leading-7 font-semibold">
                                                - Objetivo:
                                            </div>
                                        </div>
                                        <div class="ml-12">
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold">
                                                El desafío es crear una mini plataforma de pedidos, donde va existir un login, registro y la vista del pedidos donde 
                                                el usuario va a poder generar un pedido de un listado de comidas.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                                <div class="">
                                    <div class="p-6">
                                        <div class="flex items-center">
                                            <div class="text-lg leading-7 font-semibold">
                                                - Requisitos:
                                            </div>
                                        </div>
                                        <div class="ml-12">
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold">
                                                <table class="table table-bordered" style="width:90%">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col-2"></th>
                                                        <th scope="col-8" class="text-center">Requisito</th>
                                                        <th scope="col-2" class="text-center">Importancia</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row" class="text-center">1</th>
                                                        <td>Registro de usuarios</td>
                                                        <td class="text-center"><span class="badge rounded-pill bg-danger">High</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-center">2</th>
                                                        <td>Autenticacion de usuarios</td>
                                                        <td class="text-center"><span class="badge rounded-pill bg-danger">High</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-center">3</th>
                                                        <td>Listado de comidas</td>
                                                        <td class="text-center"><span class="badge rounded-pill bg-danger">High</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-center">4</th>
                                                        <td>Seleccion de comidas por usuario</td>
                                                        <td class="text-center"><span class="badge rounded-pill bg-danger">High</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-center">5</th>
                                                        <td>Quitar seleccion de comidas por usuario</td>
                                                        <td class="text-center"><span class="badge rounded-pill bg-danger">High</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                                <div class="">
                                    <div class="p-6">
                                        <div class="flex items-center">
                                            <div class="text-lg leading-7 font-semibold">
                                                - Diagramas de secuencias:
                                            </div>
                                        </div>
                                        <br>
                                        <div class="ml-12">
                                            <h4> -> Login de usuario</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_login.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Registrar un nuevo usuario</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_register.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Crear una nueva comida</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_create_food.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Generar una nueva imagen</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_generate_image.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Lista de comidas no asociadas al usuario</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_unselected_foods_list.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Lista de comidas asociadas al usuario</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_selected_foods_list.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <div class="ml-12">
                                            <h4> -> Asociar una comida a un usuario</h4>
                                            <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                                <img src="images/diagrams/diagram_sequence_assign_food_by_user.png" class="img-fluid" alt="Responsive image">
                                            </div>
                                        </div>
                                        <br>
                                        <hr>
                                        <h4> -> Borrar una comida asociada a un usuario</h4>
                                        <div class="mt-2 text-gray-600 dark:text-gray-400 text-base font-semibold d-flex justify-content-center">
                                            <img src="images/diagrams/diagram_sequence_delete_food_of_user.png" class="img-fluid" alt="Responsive image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    components: {
    },
}
</script>

<style>

</style>