# ajax-content

Adalah penyedia layanan ajax content untuk front-end. Modul ini menyediakan satu
service dengan nama `ajax` dengan penggunaan seperti di bawah:

```
// index.phtml
<?= $this->ajax->content('target-ajax-1'); ?>
<?= $this->ajax->content('target-ajax-2', 'placement'); ?>
<?= $this->ajax->content('target-ajax-3', 'placement', 'initTargetAjax3'); ?>
```

Parameter pertama adalah nama ajax-handler sesuai dengan yang didaftarkan pada
konfigurasi `ajax-content`.

Parameter kedua adalah bagaimana konten ajax ditempatkan relative pada elemen 
pemanggil. Opsi ini juga bisa didaftarkan di konfigurasi, jika opsi ini diset,
maka opsi yang ada di konfigurasi akan ditindih. Opsi yang dikenal sampai saat
ini adalah:

1. child  Menempatkan kontent ajax di dalam elemen pemanggil.
1. replace  Mengganti elemen pemanggil dengan konten dari ajax.
1. after  Menempatkan konten ajax tepat setelah element pemanggil.
1. before  Menempatkan konten ajax tepat sebelum element pemanggil.

Dan parameter ketiga adalah nama fungsi javascript yang akan dipanggil ketika
konten sudah berhasil ditempatkan. Opsi ini juga bisa didefinisikan di konfigurasi.
Jika parameter ketiga diset, maka opsi yang ada di konfigurasi akan ditindih.

## Instalasi

Agar konten ajax bisa bekerja dengan baik, pastikan sudah menginstall `jQuery` pada
site, dan tambahkan pula script di bawah untuk memanggil content parser.

```php
<script src="<?= $this->asset('js/ajax-content.js') ?>"></script>
```

## Konfigurasi

Masing-masing target ajax harus di daftarkan terlebih dahulu di konfigurasi pada
key `ajax-content` dengan bentuk seperti di bawah:

```php
// etc/config.php
return [
    'name' => 'Phun',
    ...
    'ajax-content' => [
        'target-ajax' => [
            'cache' => 43200,
            
            'view' => 'ajax/content/index',
            
            'handler' => [
                'class' => 'Post\\Controller\\AjaxContent',
                'action' => 'targetAjax'
            ],
            
            // optional, nilai placement yang dikenal adalah:
            // - child
            // - replace
            // - after
            // - before
            'placement' => 'append',
            
            // optional, adalah fungsi js yang akan dipanggil ketika konten
            // sudah diisi
            'callback' => 'initTargetAjax',
            
            // optional, target device dimana konten ini dimunculkan.
            'device' => 1
        ]
    ]
];
```

Penjelasan masing-masing properti adalah sebagai berikut:

1. target-ajax  Adalah nama ajax content provider, nama ini yang dipanggil dari
   service `ajax`.
2. cache  Adalah lamanya respond ini di cache dalam satuan detik.
3. view  Adalah view yang akan dirender pada saat generasi hasil.
4. handler  Adalah class dan action yang akan dipanggil secara static untuk mendapatkan
   parameter yang akan dikirim ke view.
5. placement  Adalah bagaimana kontent ditempatkan, nilai yang dikenal adalah
    `child`, `replace`, `before`, dan `after`.
6. callback  Adalah nama fungsi javascript yang akan dipanggil begitu konten berhasil
   ditempatkan di html, dengan parameter pertama adalah elemen pemanggil konten, dan
   parameter kedua adalah element hasil respond.
7. device  Adalah target device dimana kontent ini akan diambil. Dimana:
   1. Semua device
   2. Hanya Desktop
   3. Desktop dan Tablet
   4. Desktop dan Handphone
   5. Hanya Tablet
   6. Tablet dan Handphone
   7. Hanya Handphone