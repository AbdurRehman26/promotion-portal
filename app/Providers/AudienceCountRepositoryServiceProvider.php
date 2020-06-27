<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Data\Models\AudienceCount;
use App\Data\Repositories\AudienceCountRepository;

class AudienceCountRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
         $this->app->bind('AudienceCountRepository', function () {
            return new AudienceCountRepository(new AudienceCount);
        });
    }
}
