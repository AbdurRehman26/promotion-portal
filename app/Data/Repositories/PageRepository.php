<?php

namespace App\Data\Repositories;

use Kazmi\Data\Contracts\RepositoryContract;
use Kazmi\Data\Repositories\AbstractRepository;
use App\Data\Models\Page;

class PageRepository extends AbstractRepository implements RepositoryContract
{
    /**
     *
     * These will hold the instance of Page Class.
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
     * Example: Page-1
     *
     * @var string
     * @access protected
     *
     **/

    protected $_cacheKey = 'Page';
    protected $_cacheTotalKey = 'total-Page';

    public function __construct(Page $model)
    {
        $this->model = $model;
        $this->builder = $model;

    }
}
