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


    /**
     *
     * This method will fetch single model
     * and will return output back to client as json
     *
     * @access public
     * @return mixed
     *
     * @author Usaama Effendi <usaamaeffendi@gmail.com>
     *
     **/
    public function findById($id, $refresh = false, $details = false, $encode = true) {
        
        $data = parent::findById($id, $refresh, $details, $encode);

        $data->imagePath = $data->image ? url('storage/'.$data->image) : $data->image;
        $data->audienceCount = app('AudienceCountRepository')->findById($data->audience_count_id);

        return $data;
    }


    /**
     *
     * This method will fetch all exsiting models
     * and will return output back to client as json
     *
     * @access public
     * @return mixed
     *
     * @author Usaama Effendi <usaamaeffendi@gmail.com>
     *
     **/
    public function findByAll($pagination = false, $perPage = 10, array $input = [] ) {

        return parent::findByAll($pagination, $perPage, $input);
    }


}
