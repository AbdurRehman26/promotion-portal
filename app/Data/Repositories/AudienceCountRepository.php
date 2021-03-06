<?php

namespace App\Data\Repositories;

use Kazmi\Data\Contracts\RepositoryContract;
use Kazmi\Data\Repositories\AbstractRepository;
use App\Data\Models\AudienceCount;
use App\Traits\AbstractMethods;

class AudienceCountRepository extends AbstractRepository implements RepositoryContract
{
    use AbstractMethods;
    /**
     *
     * These will hold the instance of AudienceCount Class.
     *
     * @var object
     * @access public
     *
     **/
    public $model;

    /**
     *
     * This is the prefix of the cache key to which the
     * App\Data\Repositories data will be stored
     * App\Data\Repositories Auto incremented Id will be append to it
     *
     * Example: AudienceCount-1
     *
     * @var string
     * @access protected
     *
     **/

    protected $_cacheKey = 'AudienceCount';
    protected $_cacheTotalKey = 'total-AudienceCount';

    public function __construct(AudienceCount $model)
    {
        $this->model = $model;
        $this->builder = $model;

    }
}
