<?php

namespace App\Data\Repositories;

use Kazmi\Data\Contracts\RepositoryContract;
use Kazmi\Data\Repositories\AbstractRepository;
use App\Data\Models\Post;

class PostRepository extends AbstractRepository implements RepositoryContract
{
    /**
     *
     * These will hold the instance of Post Class.
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
     * Example: Post-1
     *
     * @var string
     * @access protected
     *
     **/

    protected $_cacheKey = 'Post';
    protected $_cacheTotalKey = 'total-Post';

    public function __construct(Post $model)
    {
        $this->model = $model;
        $this->builder = $model;

    }
}
