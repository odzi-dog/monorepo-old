<script>
  import Icon from '../components/Icon.svelte';
</script>

<main class="w-full h-min-screen bg-white relative">

  <!-- Container -->
  <section class="w-full h-screen flex items-center justify-center relative">
    <!-- Actions -->
    <div class="w-3/4 px-8 h-full flex flex-col items-center justify-center relative bg-gray-100">
      <!-- First panel (featured actions) -->
      <div class="w-full h-3/4 relative flex flex-wrap">
        <div class="w-2/3 h-full relative flex flex-wrap">
          <!-- News panel -->
          <div class="w-full h-1/2 relative p-4">
            <div class="bg-white w-full h-full rounded-2xl shadow-lg relative">
              <!-- Header -->
              <div class="absolute inset-0 top-0 w-full h-10 rounded-t-2xl flex justify-between items-center px-1.5">
                <!-- Badges -->
                <div class="flex items-center">
                  <div class="px-2 py-1.5 rounded-full bg-indigo-400">
                    <p class="text-xs text-white font-medium">Новость</p>
                  </div>
                </div>

                <!-- Control buttons -->
                <div class="flex items-center">
                  <Icon name="menu" attrs={{ class: "cursor-pointer mx-2 w-4 h-4 text-white opacity-70" }} />
                </div>
              </div>

              <!-- Content -->
              <div class="w-full h-full flex items-center">
                <!-- Text -->
                <div class="w-1/2 px-4 pt-4">
                  <h1 class="text-lg text-black font-bold">Lorem ipsum dolor sit amet.</h1>
                  <p class="text-xs text-black opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus corporis necessitatibus amet optio enim sit tempore ipsa iste ut.</p>

                  <!-- Buttons -->
                  <div class="w-min opacity-80 mt-2">
                    <div class="cursor-pointer rounded-md flex items-center justify-center bg-indigo-400 px-2 py-1.5">
                      <p class="text-white text-xs font-bold mr-1">Читать</p>
                      <Icon name="arrow-right" attrs={{ class: "w-3 h-3 text-white" }} />
                    </div>
                  </div>
                </div>

                <!-- Image -->
                <div style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/20/Red_Slate_Mountain_1.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="w-1/2 rounded-r-2xl h-full bg-green-400"></div>
              </div>
            </div>
          </div>
        
          <!-- Action panel (from clinic.odzi.dog) -->
          <div class="w-1/2 h-1/2 relative p-4">
            <div class="bg-white w-full h-full rounded-2xl shadow-lg">
              <!-- Header -->
              <div class="w-full h-10 rounded-t-2xl flex justify-between items-center px-1.5">
                <!-- Badges -->
                <div class="flex items-center">
                  <div class="px-2 py-1.5 rounded-full bg-blue-400 flex items-center">
                    <Icon name="external-link" attrs={{ class: "mr-1 w-3 h-3 text-white", "stroke-width": "3" }} />
                    
                    <p class="text-xs text-white font-medium">Клиника</p>
                  </div>
                </div>

                <!-- Control buttons -->
                <div class="flex items-center">
                  <Icon name="menu" attrs={{ class: "cursor-pointer mx-2 w-4 h-4 text-black opacity-70" }} />
                </div>
              </div>
            </div>
          </div>

          <!-- Action panel (from training.odzi.dog) -->
          <div class="w-1/2 h-1/2 relative p-4">
            <div class="bg-white w-full h-full rounded-2xl shadow-lg">
              <!-- Header -->
              <div class="w-full h-10 rounded-t-2xl flex justify-between items-center px-1.5">
                <!-- Badges -->
                <div class="flex items-center">
                  <div class="px-2 py-1.5 rounded-full bg-red-400 flex items-center">
                    <Icon name="external-link" attrs={{ class: "mr-1 w-3 h-3 text-white", "stroke-width": "3" }} />
                    
                    <p class="text-xs text-white font-medium">Тренировки</p>
                  </div>
                </div>

                <!-- Control buttons -->
                <div class="flex items-center">
                  <Icon name="menu" attrs={{ class: "cursor-pointer mx-2 w-4 h-4 text-black opacity-70" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action panel (from adopt.odzi.dog) -->
        <div class="w-1/3 h-full relative p-4">
          <div class="bg-white w-full h-full rounded-2xl shadow-lg relative">
            <!-- Header -->
            <div class="absolute top-0 w-full h-10 rounded-t-2xl flex justify-between items-center px-1.5">
              <!-- Badges -->
              <div class="flex items-center">
                <div class="px-2 py-1.5 rounded-full bg-yellow-400 flex items-center">
                  <Icon name="external-link" attrs={{ class: "mr-1 w-3 h-3 text-white", "stroke-width": "3" }} />
                  
                  <p class="text-xs text-white font-medium">Приют</p>
                </div>
              </div>

              <!-- Control buttons -->
              <div class="flex items-center">
                <Icon name="menu" attrs={{ class: "cursor-pointer mx-2 w-4 h-4 text-black opacity-70" }} />
              </div>
            </div>

            <!-- Content -->
            <div class="w-full h-full flex flex-col items-center justify-center relative px-6">
              <!-- Image -->
              <div style="background-image: url('https://i2-prod.mylondon.news/whats-on/shopping/article20535123.ece/ALTERNATES/s615/181702309_193432072497296_2175272330495473101_n.jpg'); background-position: center; background-size: cover; background-repeat: no-repeat;" class="w-full h-1/2 rounded-2xl"></div>

              <!-- Dog name + adopt button -->
              <div class="w-full flex justify-between items-center mt-4">
                <!-- Dog name -->
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-red-400"></div>
                
                  <div class="ml-2">
                    <h1 class="text-sm font-medium text-black">Борис</h1>
                    <p class="text-xs text-black opacity-60">3 года</p>
                  </div>
                </div>

                <!-- Adopt button -->
                <!-- <div class="flex items-center p-2 rounded-md bg-indigo-400">
                  <Icon name="external-link" attrs={{ class: "w-4 h-4 text-white", "stroke-width": "3" }} />
                </div> -->
              </div>

              <!-- Description -->
              <div class="mt-3">
                <p class="text-xs text-black opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, impedit iusto? Repellendus odit ea id!</p>
              </div>

              <!-- Controls -->
              <div class="absolute bottom-0 w-full flex items-center justify-between h-8 px-6 opacity-60">
                <Icon name="arrow-left" attrs={{ class: "w-4 h-4 text-black" }} />

                <!-- Dots -->
                <div class="flex items-center opacity-60">
                  <div class="mx-2 w-3 h-3 rounded-full bg-black"></div>
                  <div class="mx-2 w-3 h-3 rounded-full border-2 border-black"></div>
                  <div class="mx-2 w-3 h-3 rounded-full border-2 border-black"></div>
                </div>

                <Icon name="arrow-right" attrs={{ class: "w-4 h-4 text-black" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Links -->
      <div class="w-full flex items-center justify-center mt-8 opacity-60">
        <div class="mx-6 flex items-center cursor-pointer">
          <Icon name="list" attrs={{ class: "text-black w-4 h-4" }} />
          <p class="ml-1.5 text-sm text-black">Больше сервисов</p>
        </div>

        <div class="mx-6 flex items-center cursor-pointer">
          <Icon name="help-circle" attrs={{ class: "text-black w-4 h-4" }} />
          <p class="ml-1.5 text-sm text-black">Помощь</p>
        </div>

        <div class="mx-6 flex items-center cursor-pointer">
          <Icon name="at-sign" attrs={{ class: "text-black w-4 h-4" }} />
          <p class="ml-1.5 text-sm text-black">Про команду</p>
        </div>
      </div>
    
    </div>

    <!-- Services -->
    <div class="w-1/4 flex flex-col items-center justify-center h-full relative px-8">      
      
      <div class="absolute top-0 p-8 w-full flex justify-between">
        <img class="w-10 h-10 opacity-80" src="./logotypes/odzi-dog-small-black.svg" alt="odzi dog black logotype">
        
        <div class="relative cursor-pointer w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
          <Icon name="menu" attrs={{ class: "w-5 h-5 text-black opacity-80" }} />

          <!-- <div class="absolute top-0 right-0">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
          </div> -->
        </div>
      </div>
      
      <!-- Services -->
      <div class="w-full flex flex-col text-black relative opacity-80">
        <a class="w-min my-3 border-b-2 border-black text-left text-4xl" href="/">Главная</a>
        
        <div class="w-min my-3 relative pr-4">
          <a class="opacity-50 text-left text-4xl" href="/">Приют</a>
          
          <div class="absolute top-0 right-0">
            <div class="w-4 h-4 rounded-full bg-red-500"></div>
          </div>
        </div>
        
        <a class="my-3 opacity-50 text-left text-4xl" href="/">Клиника</a>
        <a class="my-3 opacity-50 text-left text-4xl" href="/">Тренировки</a>
      </div>
      
      <!-- Other services -->
      <div class="mt-6 p-4 w-full h-32 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl opacity-60">
        <!-- Buttons -->
        <div class="mb-1.5 w-full flex items-center justify-between">
          <p class="text-xs text-white opacity-80">Lorem</p>

          <Icon name="x" attrs={{ class: "w-4 h-4 text-white cursor-pointer" }} />
        </div>

        <!-- Title -->
        <h1 class="text-md text-bold text-white">Lorem ipsum dolor sit amet.</h1>
        <p class="text-xs text-bold text-white opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a?</p>
      </div>
    </div>
  </section>

</main>