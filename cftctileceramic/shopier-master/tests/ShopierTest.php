<?php

namespace Shopier\Tests;

use PHPUnit\Framework\TestCase;
use Shopier\Shopier;

/**
 * @requires extension json
 */
class ShopierTest extends TestCase
{
    private $apiKey = '3f823d81fee2c83863764f4137a0e5df';
    private $apiSecret = 'd127efaf06ef8ad907867fa23ad2beb7';

    /**
     * @test
     */
    public function testShopierInstanceCreation()
    {
        $shopier = new Shopier($this->apiKey, $this->apiSecret);
        $this->assertInstanceOf(Shopier::class, $shopier);
    }

    /**
     * @test
     */
    public function testGetParams()
    {
        $shopier = new Shopier($this->apiKey, $this->apiSecret);
        $params = $shopier->getParams();
        $this->assertNotNull($params);
    }
}
