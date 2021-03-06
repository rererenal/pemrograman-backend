<?php
# Renaldi Velajati Kencana / 0110220231 / 3TI02

# membuat class Animal
class Animal{
  # property animals
  public $hewan = [];

  # method constructor - mengisi data awal
  # parameter: data hewan (array)
  public function __construct($data){
      $this->hewan = $data;
  }

  # method index - menampilkan data animals
  public function index(){
      for ($x = 0; $x < count($this->hewan); $x++){
          echo "Hewan ke - ", $x+1,  " adalah " ,$this->hewan[$x], ", ";
      }
    //   foreach ($this->hewan as $i){
    //       echo $i, ", ";
    //   }
    # gunakan foreach untuk menampilkan data animals (array)
  }

  # method store - menambahkan hewan baru
  # parameter: hewan baru
  public function store($data){
    array_push($this->hewan, $data);
    # gunakan method array_push untuk menambahkan data baru
  }

  # method update - mengupdate hewan
  # parameter: index dan hewan baru
  public function update($index, $data){
      $this->hewan[$index] = $data;
  }

  # method delete - menghapus hewan
  # parameter: index
  public function destroy($index){
      array_splice($this->hewan, $index, $index);
    # gunakan method unset atau array_splice untuk menghapus data array
  }
}


# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(["Anjing", "Kucing"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";